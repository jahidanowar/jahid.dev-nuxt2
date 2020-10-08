<template>
  <form name="contact" class="text-center flex flex-col w-full">
    <div class="flex flex-col md:flex-row gap-2">
      <div class="w-full">
        <input
          class="bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 mb-4 w-full"
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <div class="w-full">
        <input
          class="bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 mb-4 w-full"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-2">
      <div class="relative w-full mb-4">
        <select
          name="projectType"
          class="block bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 appearance-none w-full"
        >
          <option value="0" class="text-gray-400">Interested In</option>
          <option value="Projects" class="text-gray-400">Projects</option>
          <option value="Inquiry" class="text-gray-400">Inquiry</option>
          <option value="Connect" class="text-gray-400">Connect</option>
          <option value="Other" class="text-gray-400">Other</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
      <!-- <div class="relative w-full mb-4">
        <select
          name="budgetRange"
          class="block bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 appearance-none w-full"
        >
          <option value="0" class="text-gray-400">Budget Range</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div> -->
    </div>
    <textarea
      name="description"
      class="bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 mb-4 h-32"
      placeholder="Description"
    ></textarea>
    <button
      class="btn block w-full bg-primary hover:bg-secondary text-white"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
