export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validaton: Rule => Rule.required().warning('A Title is required')
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      validaton: Rule => Rule.required().warning('An ID is required')
    },
    {
      name: 'asset',
      title: 'Asset',
      type: 'mux.video'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      },
      validaton: Rule => Rule.required().warning('A Slug is required')
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'author',
   // },
    {
      name: 'interaction',
      title: 'Interaction',
      type: 'array',
      of: [{ type: 'interaction' }]
    }
  ]
};
