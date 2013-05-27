if (Bookmarks.find().count() === 0) {
  testUser = Meteor.users.insert({
    profile: { name: "Test User" }
  })

  Bookmarks.insert({
    title: "Meteor Docs",
    url: "http://docs.meteor.com/#collections",
    description: "_Extremely_ well written, noted here so I don't forget the URL when I want to find them.",
    tags: ["meteor", "javascript", "reference", "code"],
    hidden: false,
    userId: testUser._id
  })

  Bookmarks.insert({
    title: "Bootstrap",
    url: "http://twitter.github.io/bootstrap",
    description: "Finally coming around to bootstrap, the speed with which it lets me set up a fairly attractive demo app is super appealing.",
    tags: ["css", "framework", "code"],
    hidden: false,
    userId: testUser._id
  })

  Bookmarks.insert({
    title: "Just My Type",
    url: "http://daneden.me/type/",
    description: "I really suck at coming up with type combinations, this site helps me such a little less",
    tags: ["design", "reference", "fonts"],
    hidden: false,
    userId: testUser._id
  })
}