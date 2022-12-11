//const output = document.querySelector(".output");



const sheetID = '1NUt36vkRrYxYPRjzqg3JZXIMD552wA78BvV4lID2Nz4';
/* const base = 'https://docs.google.com/spreadsheets/d/'+sheetID+'/gviz/tq?';
const sheetName = 'users';
const query = encodeURIComponent('Select *');
const url = base+'&sheet='+sheetName+'&tq='+query; */

document.addEventListener('DOMContentLoaded',loadGSheetData(sheetID,'output'));




/* function init2(){
 
    // https://sheets.googleapis.com/v4/spreadsheets/1NUt36vkRrYxYPRjzqg3JZXIMD552wA78BvV4lID2Nzc/values/Services?alt=json&key=AIzaSyDHwo9vdvNT7k1_Xw--teAE-JF5r8fGIT8
    var spreadsheet_id = '1NUt36vkRrYxYPRjzqg3JZXIMD552wA78BvV4lID2Nzc';
    var tab_name = 'Services';
    var api_key = 'AIzaSyDHwo9vdvNT7k1_Xw--teAE-JF5r8fGIT8';
    //const url = 'https://spreadsheets.google.com/feeds/list/1NUt36vkRrYxYPRjzqg3JZXIMD552wA78BvV4lID2Nz4/default/public/values?alt=json';
    const url = 'https://sheets.googleapis.com/v4/spreadsheets/' +
    spreadsheet_id + '/values/' + tab_name +
    '?alt=json&key=' + api_key;
  
    $.getJSON(url, data => {
      
      data.feed.entry.forEach(item => {
        const post = {
          Service: item['gsx$Service']['$t'],
          Type: item['gsx$Type']['$t'],
          Category: item['gsx$Category']['$t'],
          Description: item['gsx$Description']['$t'],
          Price: item['gsx$Price']['$t'],
        };
  
        $('custom-list').append(`
          <li>
            <h1>${post.Service}</h1>
            <h2>${post.Type}</h2>
            <p>${post.Category}</p>
            <p>${post.Description}</p>
            <p>${post.Price}</p>
          </li>
      `);
      });
    });
} */
//output.textContent = url;
