/**
 * Created by Visual Studio.
 * User: Antuanett Barrios
 */
idboard.service('MarksService', function () {
    var marksList = [
        {
            idMark: '1',
            idBusinessEntity: '2',
            idMatter: '1', //id Cours /*in data base this is the id of matter**/
            idClass: '1',  // id Grade
            value: '10',
            coefficient: '0,5'
        },
        {
            idMark: '2',
            idBusinessEntity: '45',
            idMatter: '45', //id Cours /*in data base this is the id of matter**/
            idClass: '1',
            value: '0',
            coefficient: '0,5'
        },
        {
            idMark: '3',
            idBusinessEntity: '65',
            idMatter: '65', //id Cours /*in data base this is the id of matter**/
            idClass: '1',
            value: '1,7',
            coefficient: '0,5'
        },
        {
            idMark: '4',
            idBusinessEntity: '78',
            idMatter: '88', //id Cours /*in data base this is the id of matter**/
            idClass: '1',
            value: '8',
            coefficient: '0,5'
        },
        {
            idMark: '5',
            idBusinessEntity: '74',
            idMatter: '1', //id Cours /*in data base this is the id of matter**/
            idClass: '1',
            value: '5',
            coefficient: '0,5'
        }

    ];

    this.getMarks = function () {
        return marksList;
    }
}