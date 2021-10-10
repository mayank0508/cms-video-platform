export default {
  name: 'account',
  title: 'Account',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validaton: Rule => Rule.required().warning('Username is required')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'username',
        maxLength: 100
      },
      validaton: Rule => Rule.required().warning('Slug is required')
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      validaton: Rule => Rule.required().warning('ID is required')
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'followers',
      title: 'Followers',
      type: 'number'
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'videoReference'}]
    }
  ]
};
