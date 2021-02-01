export function addStream(id) {
  //mutation to update streams amount using Sanity Api
  const mutations = [{
    "patch": {
      "id": id,
      "inc": {
        "streams": 1
      }
    }
  }]

  const tokenWithWriteAccess = process.env.REACT_APP_SANITY_API_KEY;
  fetch(`https://4emsv94v.api.sanity.io/v1/data/mutate/production`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${tokenWithWriteAccess}`
    },
    body: JSON.stringify({mutations})
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
}

