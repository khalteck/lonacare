import { doc } from "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

export function useQueryDoc(docId) {
  const ref = doc(useFirestore(), "cms", docId);

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(ref);

  return { status, data };
}
