import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../Auth';

type SignInProps = {
  email: string;
  password: string;
  pCallback: (user: object) => void;
  nCallback: (e: object) => void;
};

export async function SignUpUser({
  email,
  password,
  pCallback,
  nCallback,
}: SignInProps) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      const user = userCred.user      
      pCallback(user);
    })
    .catch(e => {
      nCallback(e);
    });
}

export async function SignInUser({
  email,
  password,
  pCallback,
  nCallback,
}: SignInProps) {
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      const user = userCred.user      
      pCallback(user);
    })
    .catch(e => {
      nCallback(e);
    });
}
