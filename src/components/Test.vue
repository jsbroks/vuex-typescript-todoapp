<script>
import { useStore } from '@/store'

export default {
  setup() {
    const store = useStore()
    store.dispatch()
  }
}
</script>
