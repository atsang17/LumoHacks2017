from flask import jsonify
from from flask_cors import cross_origin
import requests
import json

@app.route('/hello', methods=['GET'])
@cross_origin()
def hello():
    return jsonify({
        'message':'Helloworld'
    })
