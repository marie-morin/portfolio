<script>
import TimelineItem from "@/components/TimelineItem";

export default {
  name: "Timeline",
  components: { TimelineItem },
};
</script>

<template>
  <ul class="timeline">
    <TimelineItem side="left" />
    <TimelineItem side="right" />
    <TimelineItem side="left" />
    <TimelineItem side="right" />
  </ul>
</template>


<style scoped lang="scss">
</style>