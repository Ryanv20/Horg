from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # This allows cross-origin requests from your React app

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",  # Update with your MySQL username
    password="",  # Update with your MySQL password
    database="Cleaning_Agency"  # The database you created
)

cursor = db.cursor()

# Sample route to fetch users
@app.route('/users', methods=['GET'])
def get_users():
    cursor.execute("SELECT * FROM User")
    users = cursor.fetchall()
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
