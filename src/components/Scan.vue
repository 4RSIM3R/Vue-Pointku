<template>
  <div>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
name : 'Scan',
methods: {
  onDecode (decodedString) {
    console.log(decodedString)
  }
},
components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
}
}
</script>
