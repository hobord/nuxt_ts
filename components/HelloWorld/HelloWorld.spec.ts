import { shallowMount } from '@vue/test-utils';
import 'jest';
import HelloComponent  from './HelloWorld.vue';

describe("Hello", () => {
  let instance: any;
  // @ts-ignore: Unreachable code error
  instance = shallowMount(HelloComponent, {
  });
  
  it("should return the current year", () => {
      expect(instance.vm.msg).toBe("2018");
    });
});