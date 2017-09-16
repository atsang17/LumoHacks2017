from flask import jsonify
from flask_cors import cross_origin
from app import app
import requests
import json

@app.route('/hello', methods=['GET'])
@cross_origin()
def hello():
    return jsonify({
        'message':'Helloworld'
    })
