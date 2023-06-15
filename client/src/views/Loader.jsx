import styles from './Loader.module.css'

const Loader = () => {
    return (
         <div>
        <h1>Loading...</h1>
   <div className={styles.loader}>
  <div className={styles.cube}>
    <div className={styles.face1}></div>
    <div className={styles.face2}></div>
    <div className={styles.face3}></div>
    <div className={styles.face4}></div>
    <div className={styles.face5}></div>
    <div className={styles.face6}></div>
  </div>
</div>
      </div>
    )
}


export default Loader;