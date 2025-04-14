import assets from '../../assets';
import styles from '../../styles/Profile/card.module.css';

const clients = [
  {
    id: 1,
    img: assets.userImg,
    name: 'Angela Rohmanovich',
  },
  {
    id: 2,
    img: assets.userImg,
    name: 'Angela Rohmanovich',
  },
  {
    id: 3,
    img: assets.userImg,
    name: 'Angela Rohmanovich',
  },
  {
    id: 4,
    img: assets.userImg,
    name: 'Angela Rohmanovich',
  },
  {
    id: 5,
    img: assets.userImg,
    name: 'Angela Rohmanovich',
  },
];

export const ClientList = () => {
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Client list</h2>
        <div className={styles.line}></div>
        <div className={styles.clients}>
          {clients?.map((client) => (
            <div className={styles.clientsBox} key={client.id}>
              <img className={styles.userImg} src={client.img} alt="" />
              <h3 className={styles.userName}>{client.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
