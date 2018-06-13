import { shallowMount } from '@vue/test-utils';
import HelloComponent from '../../components/HelloWorld/HelloWorld.vue';

describe("Hello", () => {
  let instance: any;

  instance = shallowMount(HelloComponent, {
  });
  
  it("should return the current year", () => {
      expect(instance.vm.msg).toBe("2018");
    });
});