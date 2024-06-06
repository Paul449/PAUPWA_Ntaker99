import { openDB } from 'idb'; //importing openDB, opening indexedDB and returning a promise
//initializing indexed database
const initdb = async () =>
  openDB('jate', 1, { //database called jate for text editor
    upgrade(db) { // checking if jate indexed database already exists before use
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true }); //
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try{
    //connecting to jate database and specifying the version I chose
    const jateDB = await openDB('jate', 1);
    //creating a new transaction specifying the database with the corresponding data priviledges
    const tx = jateDB.transaction('jate','readwrite');
    //store data into the jateDB
    const store = tx.objectStore('jate');
    //store and pass content to DB
    const request = store.put(content);
    //result
    const result = await request;
    console.log('data stored in the database', result);
  }catch(error){
    console.error('putDb not implemented',error)
  } 
  };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{ 
  try{

    
  }catch(error){
    console.error('getDb not implemented',error)
  }
};

initdb();
