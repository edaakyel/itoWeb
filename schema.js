const fetch = require('cross-fetch');
const fs = require('fs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

fetch(`${'https://api.ilgintso.boniki.net'}/graphql`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    const data = result.data;

    const possibleTypes = {};
    // data.__schema.types.forEach((supertype) => {
    //   if (supertype.possibleTypes) {
    //     possibleTypes[supertype.name] = supertype.possibleTypes.map(
    //       (subtype) => subtype.name,
    //     );
    //     supertype.possibleTypes = possibleTypes[supertype.name];
    //   }
    // });

    fs.writeFileSync(
      './src/gql/fragmentTypes.json',
      JSON.stringify(data),
      (err) => {
        if (err) {
          console.error('Error writing fragmentTypes file', err);
        } else {
          console.log('Fragment types successfully extracted!');
        }
      },
    );
  });
