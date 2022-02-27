import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAvdT9aaKuDqo62PiEN1bifrtG-VcIik_4',
  authDomain: 'weekly-team-planner.firebaseapp.com',
  projectId: 'weekly-team-planner',
  storageBucket: 'weekly-team-planner.appspot.com',
  messagingSenderId: '14621081210',
  appId: '1:14621081210:web:753bf83a05e0298e90c5c3',
  measurementId: 'G-8XM18PTRRF',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const membersCol = collection(db, 'members');
const eventsCol = collection(db, 'events');

async function getMembers() {
  const membersSnap = await getDocs(membersCol);
  const membersList = membersSnap.docs.map((doc) => doc.data());
  return membersList;
}

async function getEvents() {
  const eventsSnap = await getDocs(eventsCol);
  const eventsList = eventsSnap.docs.map((doc) => doc.data());
  return eventsList;
}

export { getMembers, getEvents, membersCol, db };
