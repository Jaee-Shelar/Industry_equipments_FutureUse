from flask import Flask,request,render_template
import numpy as np
import pandas as pd

import pickle
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()

# model = pickle.load("equip_mnts.pkl","rb")/
with open("equip_mnts.pkl", "rb") as f:
    model = pickle.load(f)

app = Flask(__name__)
df = pd.read_csv("templates/machinery_data.csv")

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/reference_data')
def reference_data():
  return render_template("reference_data.html")

# @app.route('/feed_data')
# def feed_data():
#   return render_template("feed_data.html")

@app.route('/prediction')
def prediction():
  return render_template("prediction.html")


@app.route('/feed_data', methods =['GET','POST'])
def feed_data():
  if request.method=="POST":
    sensor_1 = float(request.form['sensor_1'])
    sensor_2 = float(request.form['sensor_2'])
    sensor_3 = float(request.form['sensor_3'])
    operational_hours = float(request.form['operational_hours'])
    
    feature = scaler.fit_transform([[ sensor_1, sensor_2, sensor_3, operational_hours]])
    
    prediction = model.predict(feature)[0]
    
    if prediction==0:
     prediction = "No"

    else :
     prediction = "Yess"
    feature = scaler.fit_transform([[ sensor_1, sensor_2, sensor_3, operational_hours]])

  else:
   return render_template("prediction.html" ,Prediction_text="Maintenance Prediction is --->>{}".format(prediction))
  
if __name__=="__main__":
  app.run(debug=True)