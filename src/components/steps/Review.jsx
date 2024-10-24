// src/component/steps/Review.jsx
import { useFormContext } from "../FormProvider";
import "./review.css"
import { keyLabels } from "./keylables.jsx"

export const Review = () => {
  const { formData } = useFormContext();

  // Function to extract and sort dynamic keys (like "betreuer0", "betreuer1", etc.)
  const getDynamicKeys = (prefix) => {
    return Object.keys(formData).filter(key => key.startsWith(prefix)).sort(); //returns an array
  };

  // Prepare the fixed keys
  const fixedKeys = ["teamname", "school", "kind-of-school", "plz", "city", "street", "street-nr"];

  // Get dynamic betreuer and schueler keys
  const betreuerKeys = getDynamicKeys("betreuer");
  const schuelerKeys = getDynamicKeys("schueler");

  // Function to get the label for a key or fall back to the key itself
  const getLabel = (key, subKey) => {
    const fullKey = subKey ? `${key}.${subKey}` : key;
    return keyLabels[fullKey] || fullKey; // Return the label if found, otherwise the original key
  };

  const handleSubmit = async () => {

    /********************************************
    /* serverside handling not yet implemented
    /********************************************
     
    try {
      const response = await fetch('https://somefile.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json(); // Assuming  PHP file returns a JSON response?
      console.log('Server Response:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
      */
  };

  return (
    <div>
      <h2>Angaben überprüfen</h2>
      <p>Wenn alle Angaben so stimmen, dann mit dem Button unten absenden!</p>
      <table>
        <tbody>
          {/* Render fixed keys */}
          {fixedKeys.map(key => (
            <tr key={key}>
              <td>{getLabel(key)}</td>
              <td>{formData[key]}</td>
            </tr>
          ))}
          <tr key="betreuer">
            <td><h3>Betreuer</h3></td>
            <td></td>
          </tr>
          {/* Render dynamic betreuer entries */}
          {betreuerKeys.map(key => (
            Object.keys(formData[key]).map(subKey => (
              <tr key={key + subKey}>
                <td>{getLabel(key, subKey)}</td>
                <td>{formData[key][subKey]}</td>
              </tr>
            ))
          ))}
          <tr key="schueler">
            <td><h3>Teammitglieder</h3></td>
            <td></td>
          </tr>

          {/* Render dynamic schueler entries */}
          {schuelerKeys.map(key => (
            Object.keys(formData[key]).map(subKey => (
              <tr key={key + subKey}>
                <td>{getLabel(key, subKey)}</td>
                <td>{formData[key][subKey]}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
      <button id="sendData" onClick={handleSubmit}>Daten absenden</button>
    </div>
  );
};