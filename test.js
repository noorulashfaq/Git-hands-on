const xmllint = require('xmllint');

function validateXML(xmlData, xsdData) {
    // Use xmllint to validate XML against the XSD schema
    const result = xmllint.validateXML({
        xml: xmlData,
        schema: xsdData,
    });

    if (result.errors) {
        // If there are errors, return them
        return result.errors;
    } else {
        // If no errors, return a success message
        return 'XML is valid against the XSD schema';
    }
}

// Example usage
const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>asf</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`;

const xsdData = `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="note">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="to" type="xs:string"/>
        <xs:element name="from" type="xs:int"/>
        <xs:element name="heading" type="xs:string"/>
        <xs:element name="body" type="xs:string"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`;

const validationErrors = validateXML(xmlData, xsdData);

if (Array.isArray(validationErrors)) {
    console.log("Validation errors found:");
    validationErrors.forEach(error => {
        console.log(error);
    });
} else {
    console.log(validationErrors);
}
