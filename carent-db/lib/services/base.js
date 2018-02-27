module.exports = function base (Model) {
  return {
    async create (data, options) {
      try {
        const instance = await Model.create(data)
        return Promise.resolve(instance)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async findOne (id, options) {
      try {
        const instance = await Model.findOne({ where: { id } })
        return Promise.resolve(instance)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async findAll (options) {
      try {
        const instances = await Model.findAll()
        return Promise.resolve(instances)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async query (options) {
      try {
        const result = await Model.findAll(options)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },

    async update(id, data, options) {
      try {
        const instance = await this.findOne(id)
        await instance.update(data)
        await instance.reload()
        return Promise.resolve(instance)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async destroy (id, options) {
      try {
        const instance = await this.findOne(id)
        const parseedInstance = JSON.parse(JSON.stringify(instance))
        await instance.destroy()
        return Promise.resolve(parseedInstance)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}