from multiprocessing import connection
from re import S
from sqlite3 import Cursor
from flask import Flask, request
from flask_cors import CORS
# import pyodbc
import psycopg2
import pymysql
import time


def create_redshift_conn(dbname, host, port, user, password):
    conn = psycopg2.connect(
        dbname=dbname,
        host=host,
        port=port,
        user=user,
        password=password)
    return conn


def create_mysql_conn(host, port, user, password, dbname):
    conn = pymysql.connect(
        host=host,
        port=port,
        user=user,
        password=password,
        db=dbname,
    )
    return conn


def execute_query(connection, query):
    curr = connection.cursor()
    res = curr.execute(query)
    details = curr.fetchall()
    return res, details


app = Flask(__name__)
CORS(app)


@app.route('/executeQuery', methods=['POST'])
def executeQuery():
    data = request.get_json()
    query = data['query']
    db = data['checked']
    print(query)
    print(db)
    if db == 'Redshift':
        dbname = 'dev'
        host = 'redshift-cluster-1.ceopdeohmgfe.us-east-1.redshift.amazonaws.com'
        port = 5439
        user = 'admin'
        password = '08021994Feb'
        connection = create_redshift_conn(dbname, host, port, user, password)
    else:
        host = 'db-1.cxi9nqaaoa0r.us-east-1.rds.amazonaws.com'
        port = 3306
        user = 'admin'
        password = '08021994feb'
        dbname = 'db1'
        connection = create_mysql_conn(host, port, user, password, dbname)

    print(connection)
    st = time.time()
    res, details = execute_query(connection, query)

    et = time.time()
    total_time = et-st
    print(res)
    print(total_time)
    headers = 0
    actual_headers = []
    if len(details):
        headers = len(details[0])
        for i in range(headers):
            actual_headers.append("Head "+str(i+1))
    return {"res": res, "time": total_time, "details": details, "headers": actual_headers}
