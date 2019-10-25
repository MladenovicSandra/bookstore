const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello, Sandra!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
})

exports.bookAdded = functions.firestore.document('books/{bookId}').onCreate(doc => {
    const book = doc.data()
    const notification = {
        content: 'Added a new book',
        user: `${book.postedByFirstName} ${book.postedByLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification)
})

exports.userJoined = functions.auth.user().onCreate( user => {
    return admin.firestore().collection('users').doc(user.uid).get().then( doc => {
        const newUser = doc.data()
        const notification = {
            content: 'Just signed up',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })
})