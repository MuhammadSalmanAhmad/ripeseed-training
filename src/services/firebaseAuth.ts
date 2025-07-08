// src/services/firebaseAuth.ts
import {app} from "../FireBaseConfig"
import { getAuth,onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

export default auth;