import mysql.connector

conexion = mysql.connector.connect(
    user='root',
    password='root',
    host='localhost',
    database='sniffer',
    port= '8889'
)
