

C:\Windows\System32>mongosh
Current Mongosh Log ID: 6b00224bb4be64d7f9d712ed
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.14.1
Using MongoDB:          9.0.4
Using Mongosh:          2.14.1
mongosh 2.14.2 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-11-20T15:59:46.138+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use StudentDB
switched to db StudentDB
StudentDB> db.createCollection("Students")
{ ok: 1 }
StudentDB> show dbs
StudentDB   8.00 KiB
admin      40.00 KiB
config     80.00 KiB
local      92.00 KiB
students    8.00 KiB
StudentDB> show collections
Students
StudentDB> db.students.insertOne({
|     rollNo: 101,
|     name: "Mayank Sharma",
|     branch: "CSE",
|     semester: 3
| })
{
  acknowledged: true,
  insertedId: ObjectId('6b0022aeb4be64d7f9d712ee')
}
StudentDB> db.students.find()
[
  {
    _id: ObjectId('6b0022aeb4be64d7f9d712ee'),
    rollNo: 101,
    name: 'Mayank Sharma',
    branch: 'CSE',
    semester: 3
  }
]
StudentDB>