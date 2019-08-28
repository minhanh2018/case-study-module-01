let Students = function (id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getId = function () {
        return this.id;
    }

    this.getFirstName = function () {
        return this.firstName;
    }

    this.getLastName = function () {
        return this.lastName;
    }

    this.getAge = function () {
        return this.age;
    }

    this.setFirstName = function (firstName) {
        this.firstName = firstName;
    }

    this.setLastName = function (lastName) {
        this.lastName = lastName;
    }

    this.setAge = function (age) {
        this.age = age;
    }
}

let Management = function () {
    let student1 = new Students(1, 'Tram', 'Anh', 24),
        student2 = new Students(2, 'Bich', 'Phuong', 30),
        student3 = new Students(3, 'Hau', 'Hoang', 23),
        student4 = new Students(4, 'Huong', 'Giang', 30),
        student5 = new Students(5, 'Bao', 'Anh', 28);
    this.studentList = [student1, student2, student3, student4, student5];

    // show studentList to Table
    this.showStudentList = function () {
        let studentTable = '<table id="students-table" border="1">' +
            '<tr>' +
            '<th>ID</th>' +
            '<th>First name</th>' +
            '<th>Last name</th>' +
            '<th>Age</th>' +
            '</tr>';
        for (let i = 0; i < this.studentList.length; i++) {
            studentTable += "<tr>" +
                "<td id='st-id-" + i + "'>" + this.studentList[i].getId() + "</td>" +
                "<td id='st-fname-" + i + "'>" + this.studentList[i].getFirstName() + "</td>" +
                "<td id='st-lname-" + i + "'>" + this.studentList[i].getLastName() + "</td>" +
                "<td id='st-age-" + i + "'>" + this.studentList[i].getAge() + "</td>"
                + "</tr>";
        }
        studentTable += "</table>";
        document.getElementById('students-list').innerHTML = studentTable;
    }

    this.selectedStudent = function () {
        let rowIndex = document.getElementById('students-table'),
            table = document.getElementById('students-table');
        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].onclick = function () {
                let rIndex = this.rowIndex;
                console.log('rindex' + rIndex);
                document.getElementById('id').value = this.cells[0].innerHTML;
                document.getElementById('fname').value = this.cells[1].innerHTML;
                document.getElementById('lname').value = this.cells[2].innerHTML;
                document.getElementById('age').value = this.cells[3].innerHTML;
                console.log('cell[0]' + this.cells[0].innerHTML);
            }
        }
    }

    this.addStudentToList = function () {
        let id = this.studentList[this.studentList.length - 1].getId() + 1,
            firstName = document.getElementById('fname').value,
            lastName = document.getElementById('lname').value,
            age = document.getElementById('age').value;
        let students = new Students(id, firstName, lastName, age);
        this.studentList.push(students);
        this.showStudentList();
    }

    this.editStudentFromList = function () {
        let id = document.getElementById('id').value;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].getId() == id) {
                this.studentList[i].setFirstName(document.getElementById('fname').value);
                this.studentList[i].setLastName(document.getElementById('lname').value);
                this.studentList[i].setAge(document.getElementById('age').value);
            }
        }
        this.showStudentList();
    }

    this.removeStudentFormList = function () {
        let id = document.getElementById('id').value;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].getId() == id) {
                console.log(this.studentList[i]);
                this.studentList.splice(i, 1);
            }
        }
        this.showStudentList();
    }
}

let manager = new Management();

manager.showStudentList();
manager.selectedStudent();
console.log(manager.studentList);

function addStudentToList() {
    manager.addStudentToList();
    manager.selectedStudent();
}

function editStudentFromList() {
    manager.editStudentFromList();
    manager.selectedStudent();
}

function removeStudentFromList() {
    manager.removeStudentFormList();
    manager.selectedStudent();
}