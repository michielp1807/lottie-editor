<template>
  <div id="about">
    <h2>Michiel's Lottie/TGS Editor</h2>
    <p>
      This Lottie/TGS Editor was made as a tool to experiment with Lottie/TGS files, but it is slowly turning into a
      fully usable editor.
    </p>
    <p>
      The TGS file format is used for animated stickers in Telegram Messenger.
      TGS files are Gzip archives containing Lottie data.
      The Lottie data is stored in JSON format, as can be seen in the JSON editor on this page.
    </p>
    <p>
      A useful resource for figuring out how the Lottie format works can be found
      <a
        target="_blank"
        href="https://mattia.basaglia.gitlab.io/python-lottie/group__Lottie.html"
      >here</a>.
    </p>
    <p>
      Note that there are some extra requirements for adding you sticker to Telegram, see
      <a
        target="_blank"
        href="https://core.telegram.org/animated_stickers"
      >here</a>.
    </p>
  </div>
</template>

<style scoped>
#about {
  max-width: 860px;
  margin: 0 auto;
  padding: 2em;
}
</style>