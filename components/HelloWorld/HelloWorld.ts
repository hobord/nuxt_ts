import Vue from "vue";
import { Component, Inject, Provide } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {

    get msg() { return "2018"; }  
    
    public getPreviousYear() {
        return "2017";
    }
}
