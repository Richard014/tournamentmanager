import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/firebase'
import { useEffect, useState } from 'react';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore'

function App() {
  const [playerList, setPlayerList] = useState([]);

  // New Player
  const [newPlayerFirstName, setNewPlayerFirstName] = useState("");
  const [newPlayerLastName, setNewPlayerLastName] = useState("");
  const [newPlayerEmail, setNewPlayerEmail] = useState("");
  
  const playerCollectionRef = collection(db, "Player");

  useEffect(() => {  
    getPlayerList();
  }, []);

  const getPlayerList = async () => {
    try{
      const data = await getDocs(playerCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id
      }));

      console.log(filteredData);
      setPlayerList(filteredData);
    } catch (err){
      console.error(err);
    }      
  };

  const onSubmitPlayer = async () => {
    try{
    await addDoc(playerCollectionRef, {
      FirstName: newPlayerFirstName,
      LastName: newPlayerLastName,
      Email: newPlayerEmail
    });
  } catch (err){
    console.log.error(err);
  }

    getPlayerList();
  };

  const deletePlayer = async (id) => {
    try{
      const playerDoc = doc(db, "Player", id);
      await deleteDoc(playerDoc);
    } catch (err){
      console.log.error(err);
    }
    getPlayerList();
  };

  return (
    <div className="App">
      <Auth/>

      <div>
        <input placeholder='FirstName' type='text' onChange={(e) => setNewPlayerFirstName(e.target.value)}/>
        <input placeholder='LastName' type='text' onChange={(e) => setNewPlayerLastName(e.target.value)}/>
        <input placeholder='Email' type='email' onChange={(e) => setNewPlayerEmail(e.target.value)}/>
        <button onClick={onSubmitPlayer}>Submit Player</button>
      </div>

      <div>
        {playerList.map((player) => (
          <div>
            <p>{player.LastName}</p>
            <button onClick={() => deletePlayer(player.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
