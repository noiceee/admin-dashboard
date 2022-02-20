import './chart.scss';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, CartesianGrid} from 'recharts';

export default function Chart({title, dataKey, userData, grid}) {
  return <div className='chart'>
    <h3 className="title">{title}</h3>
    <ResponsiveContainer width="100%" aspect={4/1.1}>
      <LineChart data={userData}>
        <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
        <Tooltip />
        <XAxis dataKey="name" stroke='#5550bd'/>
        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
      </LineChart>
    </ResponsiveContainer>
  </div>;
}
