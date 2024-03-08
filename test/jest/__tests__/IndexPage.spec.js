// IndexPage.spec.js
import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })

})

test('Name Maythawat Mahawan available on file ', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form > input ').exists("Maythawat","Mahawan","6404101332")).toBe(true)

})


it('check text content to be as defined in variable', () => {
  const wrapper = shallowMount(IndexPage, {
    data () {
      return {
        title: 'Vue is awesome.'
      }
    }
  })
  let header = wrapper.find('.htmlClass h1')
  expect(header.text()).toBe('Vue is awesome.')
})