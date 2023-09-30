var form = document.getElementById('form');
var results = document.getElementById('results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

document.getElementById('postButton').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var body = document.getElementById('body').value;

    var url = 'https://jsonplaceholder.typicode.com/posts';

    // Perform a POST request without specifying 'id' in the payload
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: name,
            body: body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        results.innerHTML = `
            <p>The title of the todo is ${data.title}</p>
            <p>The body of the todo is ${data.body}</p>
        `;
        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('body').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('getButton').addEventListener('click', function () {
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        // Perform a GET request
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            results.innerHTML = `
                <p>The title of the todo is ${data.title}</p>
                <p>The body of the todo is ${data.body}</p>
            `;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('putButton').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var body = document.getElementById('gender').value;
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                title: name,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            results.innerHTML = `<p>Update successful</p>`;
            
            document.getElementById('name').value = '';
            document.getElementById('gender').value = '';
            document.getElementById('id').value = '';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('deleteButton').addEventListener('click', function () {
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (response.status === 200) {
                console.log('Delete successful');
                results.innerHTML = `<p>Delete successful</p>`;
                
                document.getElementById('name').value = '';
                document.getElementById('gender').value = '';
                document.getElementById('id').value = '';
            } else {
                console.error('Delete failed');
                results.innerHTML = `<p>Delete failed</p>`;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});