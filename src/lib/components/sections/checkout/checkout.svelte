<script>
  import { createOrder } from '@/stores/main.js';
  export let account;
  export let cart;
  export let price;
  export let translation;
  let { email, personal_data, delivery_data } = account;

  const cartComponents = cart.map((item) => {
    return {
      product_id: item._id,
      amount: item.amount,
    };
  });

  const onFormSubmit = async (event) => {
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const order = {
      account_id: account._id,
      email: values.email,
      personal_data: {
        first_name: values.first_name,
        last_name: values.last_name,
        phone: values.phone,
        delivery_data: {
          country: values.country,
          city: values.city,
          postcode: values.postcode,
          address: values.address,
        },
      },
      customer_status: account.specialist ? 'specialist' : 'individual',
      cart: cartComponents,
    };
    const response = await createOrder(order);
  };
</script>

<section
  class="p-6 sm:p-10 lg:p-16 size-full text-gray-800 rounded-lg shadow-lg max-w-5xl mx-auto"
>
  <button
    class=" size-12 rounded-full bg-[var(--color-primary-300)] text-white hover:bg-gray-700 hover:scale-105 transition-all"
    on:click={() => window.history.back()}
    type="button"
  >
    {'←'}
  </button>

  <h1 class="text-3xl font-bold text-center mb-8">
    {translation?.checkout?.title}
  </h1>

  <form class="flex flex-col gap-4" on:submit|preventDefault={onFormSubmit}>
    <fieldset
      class="p-6 bg-white rounded-md shadow hover:shadow-lg transition-all duration-200"
    >
      <legend class="text-2xl font-semibold mb-4"
        >{translation?.checkout?.user_info}</legend
      >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label for="email" class="block text-gray-700">
          {translation?.checkout?.inputs[0]?.label}:
          <input
            required
            type="email"
            id="email"
            name="email"
            bind:value={email}
            placeholder={translation?.checkout?.inputs[0]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
        <label for="first_name" class="block text-gray-700">
          {translation?.checkout?.inputs[1]?.label}:
          <input
            required
            type="text"
            id="first_name"
            name="first_name"
            bind:value={personal_data.first_name}
            placeholder={translation?.checkout?.inputs[1]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
        <label for="last_name" class="block text-gray-700">
          {translation?.checkout?.inputs[2]?.label}:
          <input
            required
            type="text"
            id="last_name"
            name="last_name"
            bind:value={personal_data.last_name}
            placeholder={translation?.checkout?.inputs[2]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
        <label for="phone" class="block text-gray-700">
          {translation?.checkout?.inputs[3]?.label}:
          <input
            required
            type="text"
            id="phone"
            name="phone"
            bind:value={personal_data.phone}
            placeholder={translation?.checkout?.inputs[3]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
      </div>
    </fieldset>

    <fieldset
      class="p-6 bg-white rounded-md shadow hover:shadow-lg transition-all duration-200"
    >
      <legend class="text-2xl font-semibold mb-4"
        >{translation?.checkout?.delivery_info}</legend
      >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label for="country" class="block text-gray-700">
          {translation?.checkout?.delivery_inputs[0]?.label}:
          <input
            required
            type="text"
            id="country"
            name="country"
            bind:value={delivery_data.country}
            placeholder={translation?.checkout?.delivery_inputs[0]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
        <label for="city" class="block text-gray-700">
          {translation?.checkout?.delivery_inputs[1]?.label}:
          <input
            required
            type="text"
            id="city"
            name="city"
            bind:value={delivery_data.city}
            placeholder={translation?.checkout?.delivery_inputs[1]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
        <label for="postcode" class="block text-gray-700">
          {translation?.checkout?.delivery_inputs[2]?.label}:
          <input
            required
            type="text"
            id="postcode"
            name="postcode"
            bind:value={delivery_data.postcode}
            placeholder={translation?.checkout?.delivery_inputs[2]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
        <label for="address" class="block text-gray-700">
          {translation?.checkout?.delivery_inputs[3]?.label}:
          <input
            required
            type="text"
            id="address"
            name="address"
            bind:value={delivery_data.address}
            placeholder={translation?.checkout?.delivery_inputs[3]?.placeholder}
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 focus:border-[var(--color-primary-300)];"
          />
        </label>
      </div>
    </fieldset>

    <fieldset
      class="p-6 bg-white rounded-md shadow max-h-[400px] overflow-y-auto hover:shadow-lg transition-all duration-200"
    >
      <legend class="text-2xl font-semibold mb-4"
        >{translation?.checkout?.cart}</legend
      >
      <ul class="space-y-4">
        {#each cart as item}
          <li class="flex items-center space-x-4 border-b pb-4">
            <img
              src={item.photo}
              alt={item.name}
              class="w-20 h-20 object-cover rounded-md"
            />
            <div class="flex-grow">
              <p class="font-bold">{item.name}</p>
              <p class="text-sm text-gray-600">
                {translation?.checkout?.quantity}: {item.amount}
              </p>
              <p class="text-sm text-gray-600">
                {translation?.checkout?.price}: ${item.price.regular}
              </p>
              <p class="text-sm text-gray-600">
                {translation?.checkout?.total_price}: ${item.price.regular *
                  item.amount}
              </p>
            </div>
          </li>
        {/each}
      </ul>
    </fieldset>

    <fieldset
      class="p-6 bg-white rounded-md shadow hover:shadow-lg transition-all duration-200"
    >
      <legend class="text-2xl font-semibold"
        >{translation?.checkout?.pricing}</legend
      >
      <p class="text-lg">
        <span class="font-semibold">{translation?.checkout?.total_price}:</span>
        ${account.specialist ? price.specialist : price.regular}
      </p>
    </fieldset>

    <button
      class="w-48 h-14 self-end bg-black text-white rounded hover:scale-x-105 hover:bg-[var(--color-primary-300)] transition-all"
      type="submit">{translation?.checkout?.btn}</button
    >
  </form>
</section>
