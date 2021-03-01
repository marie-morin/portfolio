<script>
import TimelineItem from "@/components/TimelineItem";

export default {
  name: "Timeline",
  components: { TimelineItem },
};
</script>

<template>
  <ul class="timeline">
    <TimelineItem />
    <TimelineItem :placedRight="true" />
    <TimelineItem />
    <TimelineItem :placedRight="true" />
  </ul>
</template>


<style scoped lang="scss">
.timeline {
  position: relative;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;

  @media screen and (max-width: $break-tablet - 100) {
    padding: 0 3rem;
  }

  &:before {
    content: " ";
    width: 3px;
    height: 100%;
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -3px;
    background: pink;
    z-index: 5;

    @media screen and (max-width: $break-tablet - 100) {
      left: 3rem;
    }
  }

  li:not(first-child) {
    margin-top: 3rem;
  }
}
</style>