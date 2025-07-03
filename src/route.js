const { addNoteHandler, 
    getAllNotesHandler, 
    getNotesByIDHandler, 
    editNoteHandler,
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/api/v1/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/api/v1/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/api/v1/notes/{id}',
        handler: getNotesByIDHandler,
    },
    {
        method: 'PUT',
        path: '/api/v1/notes/{id}',
        handler: editNoteHandler,
    },
    {
        method: 'DELETE',
        path: '/api/v1/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;