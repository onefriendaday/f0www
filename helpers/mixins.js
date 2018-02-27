export const getCaretPosition = {
  methods: {
    getCaretPosition (ctrl) {
      var start, end
      if (ctrl.setSelectionRange) {
        start = ctrl.selectionStart
        end = ctrl.selectionEnd
      } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange()
        start = 0 - range.duplicate().moveStart('character', -100000)
        end = start + range.text.length
      }
      return {
        start: start,
        end: end
      }
    }
  }
}

export const dispatchErrors = {
  methods: {
    dispatchErrors (errors, model) {
      if (errors.data.length > 0) {
        this.$store.dispatch(model + '/form/addErrorField', errors.field)
      } else {
        this.$store.dispatch(model + '/form/removeErrorField', errors.field)
      }
      this.$store.dispatch(model + '/form/setErrors', errors)
    }
  }
}

export const dispatchWarnings = {
  methods: {
    dispatchWarnings (warnings, model) {
      this.$store.dispatch(model + '/form/setWarnings', warnings)
    }
  }
}
