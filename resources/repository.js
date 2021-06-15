// get a list of repositorys
const performList = async (z, bundle) => {
  const response = await z.request({
    url: 'https://example.com/api/repository.json',
    params: {
      order_by: 'id desc'
    }
  });
  return response.data
};

// find a particular repository by name (or other search criteria)
// const performSearch = async (z, bundle) => {
//   const response = await z.request({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     params: {
//       name: bundle.inputData.name
//     }
//   });
//   return response.data
// };

// creates a new repository
// const performCreate = async (z, bundle) => {
//   const response = await z.request({
//     method: 'POST',
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     body: {
//       name: bundle.inputData.name // json by default
//     }
//   });
//   return response.data
// };

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#resourceschema
  key: 'repository',
  noun: 'Repository',

  // If `get` is defined, it will be called after a `search` or `create`
  // useful if your `searches` and `creates` return sparse objects
  // get: {
  //   display: {
  //     label: 'Get Repository',
  //     description: 'Gets a repository.'
  //   },
  //   operation: {
  //     inputFields: [
  //       {key: 'id', required: true}
  //     ],
  //     perform: defineMe
  //   }
  // },

  list: {
    display: {
      label: 'New Repository',
      description: 'Lists the repositorys.'
    },
    operation: {
      perform: performList,
      // `inputFields` defines the fields a user could provide
      // Zapier will pass them in as `bundle.inputData` later. They're optional on triggers, but required on searches and creates.
      inputFields: []
    }
  },

  // search: {
  //   display: {
  //     label: 'Find Repository',
  //     description: 'Finds a repository give.'
  //   },
  //   operation: {
  //     inputFields: [
  //       {key: 'name', required: true}
  //     ],
  //     perform: performSearch
  //   },
  // },

  // create: {
  //   display: {
  //     label: 'Create Repository',
  //     description: 'Creates a new repository.'
  //   },
  //   operation: {
  //     inputFields: [
  //       {key: 'name', required: true}
  //     ],
  //     perform: performCreate
  //   },
  // },

  // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
  // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
  // returned records, and have obvious placeholder values that we can show to any user.
  // In this resource, the sample is reused across all methods
  sample: {
    id: 1,
    name: 'Test'
  },

  // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
  // For a more complete example of using dynamic fields see
  // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
  // Alternatively, a static field definition can be provided, to specify labels for the fields
  // In this resource, these output fields are reused across all resources
  outputFields: [
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'}
  ]
};
