class ChirpsController < ApplicationController
  before_action :set_chirp, only: [:show, :update, :destroy]

  # GET /chirps
  def index
    @chirps = Chirp.all

    render json: @chirps
  end

  # GET /chirps/1
  def show
    render json: @chirp
  end

  # POST /chirps
  def create
    @chirp = Chirp.new(chirp_params)

    if @chirp.save
      render json: @chirp, status: :created, location: @chirp
    else
      render json: @chirp.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chirps/1
  def update
    if @chirp.update(chirp_params)
      render json: @chirp
    else
      render json: @chirp.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chirps/1
  def destroy
    @chirp.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chirp
      @chirp = Chirp.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def chirp_params
      params.require(:chirp).permit(:author, :content)
    end
end
