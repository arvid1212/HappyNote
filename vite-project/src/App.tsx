
import styles from './App.module.css'
import {useEditor,EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
function App() {
const editor = useEditor({
  extensions: [StarterKit],
  content: "<p>Hello World!<p>",


});


return(
    <div className = {styles.pageContainer}> 
      <div className = {styles.sidebar}> </div>
            <div className={styles.editorContainer}> 
            <div className={styles.toolbar}> toolbar</div>
            <EditorContent editor={editor} />
      </div>

      </div>


    


);




}
export default App
