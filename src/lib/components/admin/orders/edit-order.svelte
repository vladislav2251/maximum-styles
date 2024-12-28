<script>
  import { goto } from '$app/navigation';
  import { updateOrderStatus } from '@/stores/main.js';

  export let data;
  let translation = data.lang.file;

  let parsedData = data.order;
  let selectedStatus = parsedData.status;

  let orderStatuses = [
    { value: 0, label: 'Pending', color: 'bg-yellow-500' },
    { value: 1, label: 'Seen', color: 'bg-blue-500' },
    { value: 2, label: 'Delivering', color: 'bg-green-500' },
    { value: 3, label: 'Delivered', color: 'bg-purple-500' },
    { value: 5, label: 'Cancelled', color: 'bg-red-500' },
  ];

  const onBackButtonClick = (e) => {
    e.preventDefault();
    goto('/admin/orders/all');
  };

  const onButtonClick = async (e) => {
    e.preventDefault();
    await updateOrderStatus(parsedData._id, { status_code: selectedStatus });
    parsedData.status = selectedStatus;
  };

  const getStatusLabel = (value) =>
    orderStatuses.find((status) => status.value === value)?.label || 'Unknown';

  const getStatusColor = (value) =>
    orderStatuses.find((status) => status.value === value)?.color ||
    'bg-gray-500';
</script>

<section class="p-6 bg-gray-50 shadow rounded-lg">
  <div class="flex justify-between items-center mb-4">
    <h1 class="font-bold text-3xl text-gray-700">Order Details</h1>
    <button
      on:click={onBackButtonClick}
      class="px-6 py-1 bg-[var(--color-primary-300)] text-white rounded hover:bg-opacity-90 transition-colors"
    >
      {'←'}
    </button>
  </div>
  <form on:submit={onButtonClick} class="flex gap-4 mb-6">
    <select
      id="status"
      name="status"
      class="border border-gray-300 rounded-md px-2 py-1 w-40"
      bind:value={selectedStatus}
    >
      {#each orderStatuses as status}
        <option value={status.value}>{status.label}</option>
      {/each}
    </select>
    <button
      type="submit"
      class="px-6 py-1 bg-[var(--color-primary-300)] text-white rounded hover:bg-opacity-90 transition-colors"
    >
      Update
    </button>
  </form>

  <div class="grid gap-4 mb-6">
    <div class="p-4 bg-white shadow rounded-lg">
      <h2 class="font-bold text-lg mb-2">Order Information</h2>
      <p class="p-[8px_16px]"><strong>Order ID:</strong> {parsedData._id}</p>
      <p class="p-[8px_16px]">
        <strong>Status:</strong>
        <span
          class={`px-3 py-1 rounded text-white ${getStatusColor(parsedData.status)}`}
        >
          {getStatusLabel(parsedData.status)}
        </span>
      </p>
      <p class="p-[8px_16px]">
        <strong>Total Price:</strong> ${parsedData.price}
      </p>
    </div>

    <div class="p-4 bg-white shadow rounded-lg">
      <h2 class="font-bold text-lg mb-2">Customer Information</h2>
      <p class="p-[8px_16px]">
        <strong>Customer ID:</strong>
        {parsedData.account_id}
      </p>
      <p class="p-[8px_16px]">
        <strong>Full Name:</strong>
        {parsedData.personal_data.first_name}
        {parsedData.personal_data.last_name}
      </p>
      <p class="p-[8px_16px]">
        <strong>Phone:</strong>
        {parsedData.personal_data.phone}
      </p>
    </div>

    <div class="p-4 bg-white shadow rounded-lg">
      <h2 class="font-bold text-lg mb-2">Delivery Information</h2>
      <p class="p-[8px_16px]">
        <strong>Country:</strong>
        {parsedData.personal_data.delivery_data.country}
      </p>
      <p class="p-[8px_16px]">
        <strong>City:</strong>
        {parsedData.personal_data.delivery_data.city}
      </p>
      <p class="p-[8px_16px]">
        <strong>Address:</strong>
        {parsedData.personal_data.delivery_data.address}
      </p>
      <p class="p-[8px_16px]">
        <strong>Postcode:</strong>
        {parsedData.personal_data.delivery_data.postcode}
      </p>
    </div>
  </div>

  <div class="p-4 bg-white shadow rounded-lg">
    <h2 class="font-bold text-lg mb-4">Cart Items</h2>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 h-[280px] overflow-auto">
      {#each parsedData.cart as item}
        <div class="flex items-center gap-4 border rounded-md">
          <img
            src={item.photo}
            alt="Product"
            class="w-24 h-auto object-cover rounded-md"
          />
          <ul class="flex flex-col gap-1">
            <li><strong>{item.name}</strong></li>
            <li>Category: {item.category.name.de}</li>
            <li>Manufacturer: {item.manufacturer.name.de}</li>
            <li>Price: ${item.price.regular}</li>
            <li>Total Price: ${item.price.regular * item.amount}</li>
            <li>Quantity: {item.amount}</li>
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
