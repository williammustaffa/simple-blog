const LocalDB = {
  posts: [],
  profiles: [],
};

LocalDB.posts.push({
  id: "p1",
  imageUrl: "https://loremflickr.com/320/240?lock=1",
  creationDate: 1544666400000,
  title: "Post test 1",
  content: "Quisque fermentum justo risus, ut hendrerit mauris pretium vel. Integer congue maximus vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a venenatis lorem. Proin tristique lorem eget enim semper, in viverra ex sollicitudin. Pellentesque efficitur, sapien vitae venenatis tempus, arcu nulla aliquam nisi, sit amet efficitur urna lorem nec magna. Maecenas convallis ultricies congue. Vivamus turpis orci, aliquam quis augue a, malesuada fringilla eros. Curabitur pulvinar arcu eget velit commodo, quis tempor diam molestie. Ut lobortis placerat nisl, a lobortis magna scelerisque nec. Donec lobortis, tellus quis cursus viverra, lectus dui aliquet enim, id rhoncus turpis leo in velit. Sed nec nibh ultricies, tincidunt eros tincidunt, rutrum arcu. Nullam ligula ex, interdum sit amet finibus in, accumsan ac tortor. Donec id tincidunt quam. Nam ornare gravida ultricies.",
  author: "a1",
  categories: [],
  comments: [],
  ratings: [],
});

LocalDB.posts.push({
  id: "p2",
  imageUrl: "https://loremflickr.com/300/200?lock=2",
  creationDate: 1583896648320,
  title: "Post test 2",
  content: "<p>Donec faucibus eros eu sem mattis luctus. Sed vestibulum vulputate ipsum, vel pellentesque metus facilisis at. Praesent facilisis imperdiet porttitor. Phasellus in fermentum lorem. Quisque non erat libero. Integer sapien ex, gravida et eros non, rhoncus luctus felis. Ut ut ligula iaculis, pretium augue mollis, vulputate lacus. Quisque pulvinar eget massa a commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique neque erat, et bibendum dui suscipit id. Nulla pulvinar facilisis ipsum in faucibus. </p><br/><p>Duis in odio laoreet, tristique libero sed, lacinia enim. Suspendisse potenti. Sed tristique massa eu bibendum ultrices. Nulla pulvinar sodales mauris vel varius. Aliquam erat volutpat. Integer tempor, erat ut viverra tincidunt, mauris lorem fringilla ipsum, ac congue velit quam in turpis. Phasellus aliquam eros quis ipsum rhoncus porttitor. Donec quis ligula est. Pellentesque quis euismod lorem, a euismod ipsum.</p><br/><p>Cras arcu diam, sollicitudin rutrum accumsan sit amet, malesuada sed libero. Fusce et felis ut orci eleifend scelerisque et sit amet sem. Quisque finibus efficitur feugiat. Proin vel lorem nibh. Duis tempor erat ex, in varius arcu suscipit vitae. Integer auctor velit diam, ut mattis sapien blandit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam interdum tincidunt libero ac sollicitudin. Pellentesque vitae ligula sit amet lacus pellentesque vehicula. Phasellus laoreet nisi pulvinar, vulputate lectus vitae, vulputate purus. Vestibulum malesuada elementum diam eget faucibus. Nam imperdiet mollis nibh. Donec ac elit purus. Fusce maximus ipsum vel sapien convallis luct</p>",
  author: "a1",
  categories: [],
  comments: [],
  ratings: [],
});

LocalDB.posts.push({
  id: "p3",
  imageUrl: "https://loremflickr.com/300/200?lock=3",
  creationDate: 1583896648321,
  title: "Post test 3",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum nisi non orci lacinia congue. Etiam eget ex lacinia, dictum arcu ut, placerat odio. Vivamus hendrerit sodales vulputate. Nulla aliquam mollis nisi ac condimentum. Duis lobortis gravida urna eu bibendum. Mauris consequat malesuada felis, non dignissim massa feugiat id. Sed varius lobortis semper. Nunc consectetur tincidunt felis sit amet efficitur. Praesent lobortis ac sem nec iaculis. Nulla facilisi. Vestibulum velit augue, porttitor auctor finibus tristique, lobortis vitae dui. Vestibulum gravida nibh sapien, et tempus velit aliquam quis.  ",
  author: "a1",
  categories: [],
  comments: [],
  ratings: [],
});

LocalDB.posts.push({
  id: "p4",
  imageUrl: "https://loremflickr.com/300/200?lock=4",
  creationDate: 1583896648322,
  title: "Post test 4",
  content: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec facilisis sem enim, ac aliquet turpis dapibus ut. Suspendisse egestas malesuada diam, vestibulum consectetur leo suscipit dignissim. Quisque lacinia felis neque, eu faucibus ipsum gravida eu. Morbi commodo iaculis lacus sed maximus. Donec vel vulputate justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas id finibus neque. Pellentesque laoreet, dui at scelerisque eleifend, mi turpis fermentum velit, ac luctus dolor massa in massa.",
  author: "a1",
  categories: [],
  comments: [],
  ratings: [],
});

LocalDB.profiles.push({
  id: "a1",
  email: "john.doe@mail.com",
  username: "john.doe",
  firstName: "John",
  lastName: "Doe",
  birthDate: 769748400000,
  description: "Just some random guy.",
  password: "12345",
});

export default LocalDB;