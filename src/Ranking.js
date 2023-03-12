import { useParams } from 'react-router-dom';

const Ranking = () => {
    const { id } = useParams();
    const line = (id) ? (<p>カテゴリーID: {id} </p>) : '';
    return (
        <div>
            <h2>Ranking コンポーネント</h2>
            { line }
        </div>
    )
}

export default Ranking;