from flask import Flask, jsonify, request
import json
import keras
import base64
from keras.preprocessing import image
from PIL import Image
from io import BytesIO
import numpy as np
import operator
import tensorflow as tf


#Creating Web API and getting model
app = Flask(__name__)
model = keras.models.load_model('./clean_model_perfect.pkl')
mapped_classes = {0: 'apple_pie', 1: 'beignets', 2: 'bruschetta', 3: 'chicken_wings', 4: 'chocolate_cake', 5: 'eggs_benedict', 6: 'fried_calamari', 7: 'fried_rice', 8: 'greek_salad', 9: 'guacamole', 10: 'hamburger', 11: 'miso_sup', 12: 'panna_cotta', 13: 'pizza', 14: 'pork_chop', 15: 'prime_rib', 16: 'ramen', 17: 'risotto', 18: 'sashimi'}
graph = tf.get_default_graph()
#Route to process the prediction
def get_class_from_prediction(prediction):
    prediction = prediction[0]
    dictionary_result = {}
    for i in range(prediction.shape[0]):
        if prediction[i] > 0.:
            dictionary_result[mapped_classes[i]] = prediction[i]
    dictionary_result = sorted(dictionary_result.items(), key=operator.itemgetter(1), reverse=True)
    result = {}
    for class_name, probability in dictionary_result:
        result[class_name] = int(probability*100)
    return result

@app.route('/predict', methods=['POST'])
def predict():
    args = json.loads(request.data)
    try:
        #Getting the image and make the transformation to use into model
        b64_image =  args['image']
        b64_image = b64_image.replace('data:image/jpeg;base64,', '')
        b64_image = b64_image.replace('data:image/png;base64,', '')
        img = Image.open(BytesIO(base64.b64decode(b64_image)))
        img = img.resize((150,150))
        img = img.convert("RGB")
        input_image = image.img_to_array(img)
        input_image = np.expand_dims(input_image, axis=0)
        global graph
        with graph.as_default():
            prediction = model.predict_proba(input_image)
            return jsonify(get_class_from_prediction(prediction))        
    except Exception:
        print Exception
        return jsonify({'message': 'Check your request and try again'}), 400