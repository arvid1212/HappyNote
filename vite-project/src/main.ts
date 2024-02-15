import './style.css'
import "./getNote"
import "./newNote"
import "./editNote"
import "./removeNote"
import { User } from './types/UinterFace';
import { fetchNotesForUser } from './getNote';



const app = document.querySelector<HTMLDivElement>('#app')!;
