class Api::V1::ItemsController < Api::V1::BaseController
	
	# response_with from responders gem - returns json object

	def index
		respond_with Item.all
	end

	def create
		respond_with :api, :v1, Item.create(item_params)
	end

	def destroy
		respond_with Item.destroy(params[:id])
	end

	def update
		item = Item.find(params["id"])
		item.update_attributes(item_params)
		respond_with item, json: item
	end

	private
	def item_params
		params.require(:item).permit(:id, :name, :description)
	end

end