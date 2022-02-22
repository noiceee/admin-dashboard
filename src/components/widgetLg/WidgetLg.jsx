import "./widgetlg.scss";

export default function WidgetLg(){

  const Button = ({type})=>{
    return <button className={type} >{type}</button>
  }
  return (
    <div className="widgetlg">
      <h3>Latest transactions</h3>
      <table>
        <tr>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            <img src="https://preview.redd.it/7q6vng58tlt71.jpg?width=736&format=pjpg&auto=webp&s=a71d5e5fe3fdb153d1308d80a333edd31bfd4e42" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">Shahi Paneer</span>
          </td>
          <td className="widgetLgDate">21 Feb 2022</td>
          <td className="widgetLgAmount">$420.10</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://preview.redd.it/7q6vng58tlt71.jpg?width=736&format=pjpg&auto=webp&s=a71d5e5fe3fdb153d1308d80a333edd31bfd4e42" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">Shahi Paneer</span>
          </td>
          <td className="widgetLgDate">21 Feb 2022</td>
          <td className="widgetLgAmount">$420.10</td>
          <td className="widgetLgStatus">
            <Button type="Declined"></Button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://preview.redd.it/7q6vng58tlt71.jpg?width=736&format=pjpg&auto=webp&s=a71d5e5fe3fdb153d1308d80a333edd31bfd4e42" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">Shahi Paneer</span>
          </td>
          <td className="widgetLgDate">21 Feb 2022</td>
          <td className="widgetLgAmount">$420.10</td>
          <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://preview.redd.it/7q6vng58tlt71.jpg?width=736&format=pjpg&auto=webp&s=a71d5e5fe3fdb153d1308d80a333edd31bfd4e42" alt="profile-pic" className="widgetLgImg" />
            <span className="widgetLgName">Shahi Paneer</span>
          </td>
          <td className="widgetLgDate">21 Feb 2022</td>
          <td className="widgetLgAmount">$420.10</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
};
