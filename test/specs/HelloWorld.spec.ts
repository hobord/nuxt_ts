import { shallowMount } from '@vue/test-utils';
import 'jest';
import Vue from 'vue';
import HelloComponent  from '../../components/HelloWorld.vue';

describe("Hello", () => {
  let instance: any;

  instance = shallowMount(HelloComponent, {
  });
  
  it("should return the current year", () => {
      expect(instance.vm.msg).toBe("2018");
    });
});